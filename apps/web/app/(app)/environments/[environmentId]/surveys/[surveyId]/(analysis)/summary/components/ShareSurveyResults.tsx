"use client";

import { CheckCircleIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";
import { Clipboard } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@formbricks/ui/Button";
import { Dialog, DialogContent } from "@formbricks/ui/Dialog";

interface ShareEmbedSurveyProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePublish: () => void;
  handleUnpublish: () => void;
  showPublishModal: boolean;
  surveyUrl: string;
}
export default function ShareSurveyResults({
  open,
  setOpen,
  handlePublish,
  handleUnpublish,
  showPublishModal,
  surveyUrl,
}: ShareEmbedSurveyProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}>
      {showPublishModal && surveyUrl ? (
        <DialogContent className="flex flex-col rounded-2xl bg-white px-12 py-6">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <CheckCircleIcon className="h-20 w-20 text-slate-300" />
            <div>
              <p className="text-lg font-medium text-slate-600">Your survey results are public!</p>
              <p className="text-balanced mt-2 text-sm text-slate-500">
                Your survey results are shared with anyone who has the link. The results will not be indexed
                by search engines.
              </p>
            </div>

            <div className="flex gap-2">
              <div className="whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800">
                <span>{surveyUrl}</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                title="Copy survey link to clipboard"
                aria-label="Copy survey link to clipboard"
                className="hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(surveyUrl);
                  toast.success("URL copied to clipboard!");
                }}>
                <Clipboard />
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                variant="secondary"
                className=" text-center"
                onClick={() => handleUnpublish()}>
                Unpublish
              </Button>

              <Button variant="darkCTA" className=" text-center" href={surveyUrl} target="_blank">
                View Site
              </Button>
            </div>
          </div>
        </DialogContent>
      ) : (
        <DialogContent className="flex flex-col rounded-2xl bg-white p-8">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <GlobeEuropeAfricaIcon className="h-20 w-20 text-slate-300" />
            <div>
              <p className="text-lg font-medium text-slate-600">Publish Results to web</p>
              <p className="text-balanced mt-2 text-sm text-slate-500">
                Your survey results are shared with anyone who has the link. The results will not be indexed
                by search engines.
              </p>
            </div>

            <Button
              type="submit"
              variant="darkCTA"
              className="h-full text-center"
              onClick={() => handlePublish()}>
              Publish to web
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
