import { useEffect, useState } from "react";
import { CollectionLayout, ColumnLayout, ImagePreview, ImagePreviewHolder, ImageUploadArea, ImageUploadInput } from "./basic.styled";
import {useDropzone} from 'react-dropzone';

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
    const maxFileCount = maxFiles ?? 3;

    const onDropImage = (acceptedFiles:File[]) => {
        if (files.length >= maxFileCount) return;
        setFiles([...files, ...acceptedFiles.map((file:File) => {return {
            preview: URL.createObjectURL(file),
            file: file
        }})]);
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone(
        {
            onDrop:onDropImage,
            accept: {
                'image/*': ['.jpeg', '.png']
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
                (maxFileCount > 1 || files.length === 0) &&
                <ImageUploadArea {...getRootProps()} dragOver={isDragActive && files.length < maxFileCount ? 1 : 0}>
                    <ImageUploadInput {...getInputProps()} />
                    {
                        files.length >= maxFileCount
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
            }
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