import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Trash2 } from 'lucide-react';
import { StoryFile } from '@/types/story';

interface FileListProps {
  files: StoryFile[];
  onFileSelect: (file: StoryFile) => void;
  onFileDelete: (fileId: string) => void;
  sectionTitle: string;
}

export const FileList = ({ files, onFileSelect, onFileDelete, sectionTitle }: FileListProps) => {
  if (files.length === 0) {
    return (
      <Card className="p-6 bg-discord-dark/30 border-primary/20">
        <div className="text-center text-muted-foreground">
          <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>No files in {sectionTitle} yet</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {files.map((file) => (
        <Card 
          key={file.id}
          className="p-4 bg-discord-dark/30 border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer group"
          onClick={() => onFileSelect(file)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-sm">{file.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {file.content.length} characters
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 hover:text-destructive transition-smooth"
              onClick={(e) => {
                e.stopPropagation();
                onFileDelete(file.id);
              }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};