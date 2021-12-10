import { getS3PresignedURL, uploadImage } from 'apis/image';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { useMemo, useRef } from 'react';

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

function ReactQuillContainer({ description, setDescription, setIsImageUploading }) {
  const quillRef = useRef();

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      setIsImageUploading(true);
      const [file] = input.files;
      const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
        await getS3PresignedURL(file.name)
      ).data;

      await uploadImage(presignedURL, file);
      const range = quillRef.current.getEditorSelection();
      quillRef.current.getEditor().insertEmbed(range.index, 'image', imageURL);
      quillRef.current.getEditor().setSelection(range.index + 1);

      document.body.querySelector(':scope > input').remove()
      
      setIsImageUploading(false);
    };
  }, [setIsImageUploading]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
          ],
          ['link', 'image'],
          ['clean']
        ],
        handlers: { image: imageHandler }
      }
    }),
    [imageHandler]
  );

  return (
    <ReactQuill
      forwardedRef={quillRef}
      placeholder="본문을 입력하세요..."
      scrollingContainer="html"
      modules={modules}
      formats={formats}
      value={description}
      onChange={setDescription}
    />
  );
}

export default ReactQuillContainer;
