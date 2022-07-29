import { useEffect, useState } from "react";
import { CollectionLayout, ColumnLayout, ImagePreview, ImagePreviewHolder, ImageUploadArea, ImageUploadInput } from "./basic.styled";
import {useDropzone} from 'react-dropzone';
import { SmallNote } from "./typography.styled";
import heic2any from "heic2any";
import ReactLoading from 'react-loading';

export interface PreviewFile {
    preview: string,
    file: File
};

interface ImageUploaderProps {
    files: PreviewFile[],
    setFiles: (files: PreviewFile[]) => void,
    maxFiles?: number,
    width?: string
};
const ImageUploader = ({ files, setFiles, maxFiles, width }: ImageUploaderProps) => {
    const [ isProcessing, setIsProcessing ] = useState(false);
    const maxFileCount = maxFiles ?? 3;

    const onDropImage = (acceptedFiles: File[]) => {
        if (files.length >= maxFileCount) return;
        setIsProcessing(true);
        Promise.all(acceptedFiles.map(f => {
            if (f.type === 'image/heic' || f.type === 'image/heif') {
                const fblob = f as Blob;
                return heic2any({ blob: fblob, toType: 'image/jpeg', quality: 0.5 })
                    .then(b => new File([b as Blob], "convertedFile.jpeg", {
                        type: 'image/jpeg'
                    }));
            }
            return new Promise<File>(_ => f);
        })).then(out => {
            setFiles([...files, ...out.map(f => {
                return {
                    preview: URL.createObjectURL(f),
                    file: f
                }
            })])
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => setIsProcessing(false));
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone(
        {
            onDrop:onDropImage,
            accept: {
                'image/*': ['.jpeg', '.png', '.jpg', '.heic', '.heif', '.JPEG', '.PNG', '.JPG', '.HEIC', '.HEIF']
            },
            maxFiles: maxFileCount
        }
    );

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <ColumnLayout width={width ?? "calc(100% - 60px)"}>
            {
                isProcessing ? <ReactLoading color="#ccc" type="bars" /> :
                (maxFileCount > 1 || files.length === 0) &&
                <ImageUploadArea {...getRootProps()} dragOver={isDragActive && files.length < maxFileCount ? 1 : 0}>
                    <ImageUploadInput {...getInputProps()} />
                    {
                        files.length >= maxFileCount
                        ?
                            <p>Maximum files reached</p>
                        :
                            isDragActive
                            ?
                                <p>Drop image here!</p>
                            :
                                <p>Drag and drop images here, or click to select files</p>
                    }
                </ImageUploadArea>
            }
            { (files.length > 0 && maxFileCount > 1) && <SmallNote>Click on images to remove them</SmallNote>}
            <CollectionLayout>
                {files.map((f,i) => <ImagePreviewHolder
                    key={i}
                    onClick={() => {
                        setFiles(files.filter((_,fi) => fi != i));
                        URL.revokeObjectURL(f.preview);
                    }}
                    >
                    <ImagePreview src={f.preview} />
                </ImagePreviewHolder>)}
            </CollectionLayout>
        </ColumnLayout>
    )
};

export default ImageUploader;