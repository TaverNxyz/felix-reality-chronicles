import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { FileReader } from '@/components/FileReader';
import { FileUpload } from '@/components/FileUpload';
import { FileList } from '@/components/FileList';
import { useToast } from '@/hooks/use-toast';
import { StoryFile } from '@/types/story';

const Index = () => {
  const [files, setFiles] = useState<StoryFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<StoryFile | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (fileName: string, content: string, section: 'felix' | 'reality') => {
    const newFile: StoryFile = {
      id: Date.now().toString(),
      name: fileName,
      content,
      section,
    };
    
    setFiles(prev => [...prev, newFile]);
    toast({
      title: "File uploaded",
      description: `${fileName} added to ${section === 'felix' ? 'Felix' : 'Reality'} section`,
    });
  };

  const handleFileDelete = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
    toast({
      title: "File deleted",
      description: "File removed from collection",
    });
  };

  const felixFiles = files.filter(file => file.section === 'felix');
  const realityFiles = files.filter(file => file.section === 'reality');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-primary/20 bg-discord-dark/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            <span className="vice-gradient bg-clip-text text-transparent">
              THE VICE CHRONICLES
            </span>
          </h1>
          <p className="text-center text-muted-foreground terminal-text">
            A digital repository of discord's darkest corners
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Felix Section */}
          <div>
            <Card className="p-6 mb-6 bg-discord-dark/50 border-vice-red/30">
              <h2 className="text-2xl font-bold mb-2 text-vice-red">
                FELIX
              </h2>
              <p className="text-muted-foreground text-sm">
                The chronicles of a power-tripping admin's descent into digital tyranny
              </p>
            </Card>

            <div className="space-y-4">
              <FileUpload 
                onFileUpload={(name, content) => handleFileUpload(name, content, 'felix')}
                sectionTitle="Felix"
              />
              <FileList
                files={felixFiles}
                onFileSelect={(file) => setSelectedFile(file)}
                onFileDelete={handleFileDelete}
                sectionTitle="Felix"
              />
            </div>
          </div>

          {/* Reality Section */}
          <div>
            <Card className="p-6 mb-6 bg-discord-dark/50 border-vice-purple/30">
              <h2 className="text-2xl font-bold mb-2 text-vice-purple">
                REALITY
              </h2>
              <p className="text-muted-foreground text-sm">
                The crumbling foundations of what once was real
              </p>
            </Card>

            <div className="space-y-4">
              <FileUpload 
                onFileUpload={(name, content) => handleFileUpload(name, content, 'reality')}
                sectionTitle="Reality"
              />
              <FileList
                files={realityFiles}
                onFileSelect={(file) => setSelectedFile(file)}
                onFileDelete={handleFileDelete}
                sectionTitle="Reality"
              />
            </div>
          </div>
        </div>
      </div>

      {/* File Reader Modal */}
      {selectedFile && (
        <FileReader
          fileName={selectedFile.name}
          content={selectedFile.content}
          onClose={() => setSelectedFile(null)}
        />
      )}
    </div>
  );
};

export default Index;