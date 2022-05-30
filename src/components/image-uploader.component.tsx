import { useEffect, useState } from "react";
import { CollectionLayout, ColumnLayout, ImagePreview, ImagePreviewHolder, ImageUploadArea, ImageUploadInput } from "./basic.styled";
import {useDropzone} from 'react-dropzone';

interface PreviewFile extends File {
    preview: string
};

const ImageUploader = () => {
    const maxFiles = 3;
    const [files, setFiles] = useState<PreviewFile[]>([]);
    const onDropImage = (acceptedFiles:File[]) => {
        if (files.length >= maxFiles) return;
        setFiles([...files, ...acceptedFiles.map((file:File) => {return {
            ...file,
            preview: URL.createObjectURL(file)
        }})]);
    };
    const {getRootProps, getInputProps, isDragActive} = useDropzone(
        {
            onDrop:onDropImage,
            accept: {
                'image/*': ['.jpeg', '.png']
            },
            maxFiles: maxFiles
        }
    );

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <ColumnLayout width="calc(100% - 60px)">
            <ImageUploadArea {...getRootProps()} dragOver={isDragActive && files.length < maxFiles ? 1 : 0}>
                <ImageUploadInput {...getInputProps()} />
                {
                    files.length >= maxFiles
                    ?
                        <p>Maximum files reached. Click images below to remove.</p>
                    :
                        isDragActive
                        ?
                            <p>Drop image here!</p>
                        :
                            <p>Drag and drop images here, or click to select files</p>
                }
            </ImageUploadArea>
            <CollectionLayout>
                {files.map((f,i) => <ImagePreviewHolder
                    key={i}
                    onClick={() => {
                        console.log("remove",i);
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