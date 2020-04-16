export default {
  title: "Video",
  name: "video",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Video File",
      name: "file",
      type: "mux.video"
    }
  ]
}