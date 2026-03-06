interface FileUploadProps {
  children: React.ReactNode;
}

export default function FileUpload({ children }: FileUploadProps) {
  return (
    <label className="p-6 inline-flex justify-center items-center border rounded-xl">
      <input type="file" className="sr-only" />
      {children}
    </label>
  );
}
