import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Plus } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (fileName: string, content: string) => void;
  sectionTitle: string;
}

export const FileUpload = ({ onFileUpload, sectionTitle }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileUpload(file.name, content);
      };
      reader.readAsText(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card 
      className="p-6 border-dashed border-2 border-primary/30 hover:border-primary/50 cursor-pointer transition-smooth bg-discord-dark/30"
      onClick={handleUploadClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".jsx,.js,.txt"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div className="text-center">
        <Upload className="w-8 h-8 mx-auto mb-3 text-primary" />
        <h3 className="text-lg font-semibold mb-2">Add to {sectionTitle}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Click to upload .jsx, .js, or .txt files
        </p>
        <Button variant="outline" className="border-primary/50 hover:border-primary">
          <Plus className="w-4 h-4 mr-2" />
          Upload File
        </Button>
      </div>
    </Card>
  );
};