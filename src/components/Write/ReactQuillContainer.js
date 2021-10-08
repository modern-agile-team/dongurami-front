import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function ReactQuillContainer({ description, setDescription }) {
  return (
    <ReactQuill
      placeholder="본문을 입력하세요..."
      modules={modules}
      formats={formats}
      value={description}
      onChange={setDescription}
    />
  );
}

export default ReactQuillContainer;
