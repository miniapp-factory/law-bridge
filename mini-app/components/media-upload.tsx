"use client";
import { Button } from "@/components/ui/button";
export default function MediaUpload() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">Upload Media</h2>
      <Button variant="outline">Upload Video</Button>
      <Button variant="outline" className="ml-2">Upload Photo</Button>
      <Button variant="outline" className="ml-2">Upload Music</Button>
    </section>
  );
}
