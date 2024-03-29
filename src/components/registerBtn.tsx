"use client"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Card } from "./ui/card"
import { CardTitle } from "./ui/card"
import WorkerImage from '../../public/images/Construction-bro.svg'
import EmployerImage from '../../public/images/Business deal-rafiki.svg'
export default function RegisterButton() {
  return (
    <Dialog>
      <DialogTrigger asChild >
      <div className="lg:mt-0 w-full md:w-auto flex justify-center items-center">
                        <a
                            href="#"
                            className="relative flex h-12 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                            <span className="relative text-sm font-semibold text-white"
                                >Register Now </span>
                            
                        </a>
                    </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-slate-500">
        <DialogHeader>
          <DialogTitle>Welcome!</DialogTitle>
          <DialogDescription>
          Register into Mera Rojgar Mera Adhikhar Portal
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-center items-center gap-2">
        <a href="/registerWorker"><Card className="bg-gray-800 p-4 text-white"><img src={WorkerImage} alt="" className="w-[265px]"/><CardTitle>Worker/Contractor</CardTitle></Card></a>
        <a href="/registerEmployer"><Card className="bg-gray-800 p-4 text-white"><img src={EmployerImage} alt="" className="w-[265px]" /><CardTitle>Employer</CardTitle></Card></a>
        </div>
        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
