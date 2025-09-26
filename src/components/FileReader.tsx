import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, FileText } from 'lucide-react';

interface FileReaderProps {
  fileName: string;
  content: string;
  onClose: () => void;
}

export const FileReader = ({ fileName, content, onClose }: FileReaderProps) => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 p-4">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold terminal-text">{fileName}</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-primary/50 hover:border-primary"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <Card className="flex-1 p-6 bg-discord-dark/50 border-primary/20 shadow-glow overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="text-sm leading-relaxed font-mono">
              {content.split('\n').map((line, index) => {
                const hasTargetUser = line.includes('tcp.dns') || line.includes('felixtfelix');
                const isRedacted = line.includes('(redacted)');
                return (
                  <div 
                    key={index}
                    className={!hasTargetUser && !isRedacted && line.trim() ? 'text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded' : ''}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {line}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};