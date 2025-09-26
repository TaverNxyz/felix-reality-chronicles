import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, FileText } from 'lucide-react';

interface FileReaderProps {
  fileName: string;
  content: string;
  onClose: () => void;
  images?: string[];
}

export const FileReader = ({ fileName, content, onClose, images }: FileReaderProps) => {
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
                 const isRealityFile = fileName.toLowerCase().includes('reality');
                 const shouldHighlight = !hasTargetUser && !isRedacted && line.trim();
                 
                 const highlightClass = shouldHighlight 
                   ? isRealityFile 
                     ? 'text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded'
                     : 'text-blue-400 bg-blue-400/10 px-2 py-1 rounded'
                   : '';
                 
                 return (
                   <div 
                     key={index}
                     className={highlightClass}
                     style={{ whiteSpace: 'pre-wrap' }}
                   >
                     {line}
                   </div>
                 );
               })}
             </div>
             
             {images && images.length > 0 && (
               <div className="mt-6 pt-6 border-t border-primary/20">
                 <h3 className="text-lg font-semibold mb-4 text-primary">Evidence</h3>
                 <div className="grid gap-4">
                   {images.map((imageUrl, index) => (
                     <div key={index} className="rounded-lg overflow-hidden border border-primary/20">
                       <img 
                         src={imageUrl} 
                         alt={`Evidence ${index + 1}`}
                         className="w-full h-auto max-w-full"
                         loading="lazy"
                       />
                     </div>
                   ))}
                 </div>
               </div>
             )}
          </div>
        </Card>
      </div>
    </div>
  );
};