import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input"
import { InputOTPForm } from "./input-otpForm";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "./ui/select";
import Calendar from "react-calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import 'react-calendar/dist/Calendar.css';


const success = () => toast.success("Form Submitted Successfully! Please check your mobile number for OTP");
const error = () => toast.error("Error Registering User")
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  email:z.string().email({message:"Invalid email! "}),
  name: z.string(),
  mobileNumber: z.string().regex(phoneRegex,{message:'Invalid Number!'}),
  address:z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    pincode: z.string().regex(/^\d+$/, { message: 'Pin code must contain only digits' }),
  }),
  dob: z.date(),
  gender: z.string(),
  company: z.string(),
  photo: z.string(),
  aadharCard: z.string(),
  labourCard: z.string(),
  userRole: z.string(),
  categoriesOfWork: z.string(),
});

export default function WorkerRegisterForm () {
    const [showOTP,setShowOTP] = useState(false)
    function toggleotpvisibility(){
        setShowOTP(true)
    }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      gender:"",
      dob: new Date(),
      address:{
        street:"",
        city:"",
        pincode:"",
        state:"",
        
      },
      mobileNumber: "",
      photo: "",
      aadharCard:"",
      labourCard:"",
      company:"",
      categoriesOfWork:"",
      userRole:""
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = values
   try{
    const response = await fetch("http://localhost:5000/user/register",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(payload),
    })
    const data = await response.json();
    console.log(data.message)

    if(data){
        success();
        toggleotpvisibility();
    }
   }
   catch(err){
    console.error(err)
    error();
   }
      
  }

  return (
    
    
   <Card className="md:p-16 px-4 py-8 mx-auto my-2 md:w-2/3 w-full bg-gray-800 flex flex-col justify-center items-center "> 
   {(showOTP)?<Card className="bg-slate-900 p-8 flex flex-col justify-center items-center text-white fixed bottom-[50vh]"><CardTitle>Input OTP</CardTitle><CardDescription className="my-2">OTP has been sent to your registered mobile number.</CardDescription><InputOTPForm></InputOTPForm><Button className="w-full my-4">Submit</Button></Card>
   :<div></div>}
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
 
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full text-left font-normal bg-gray-400 ",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                   onChange={field.onChange}
                   
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-gray-300 h-12">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-Binary">Non-Binary</SelectItem>
                  <SelectItem value="Rather Not Say">Rather not say</SelectItem>
                </SelectContent>
              </Select>
              
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-gray-300 h-12">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Worker">Worker</SelectItem>
                  <SelectItem value="Contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
              
            </FormItem>
          )}
        />
        
        <FormField
        control={form.control}
        name="address.street"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street</FormLabel>
            <FormControl>
              <Input
                placeholder=""
                {...field}
                className="m-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="address.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input
                placeholder=""
                {...field}
                className="m-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="address.pincode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pincode</FormLabel>
            <FormControl>
              <Input
                placeholder=""
                {...field}
                className="m-0"
                inputMode="numeric"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="address.state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormControl>
              <Input
                placeholder=""
                {...field}
                className="m-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} className="m-0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aadharCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhar Card</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="labourCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Labour Card</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="m-0"
                  type="file"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

{/* Construction Workers
Household Helpers
Factory Workers
Farm Laborers
Transportation Workers
Skilled Workers
Service workers */}
         <FormField
          control={form.control}
          name="categoriesOfWork"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category of Work</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full bg-gray-300 h-12">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Construction Worker">Construction Worker</SelectItem>
                  <SelectItem value="Household Helper">Household Helper</SelectItem>
                  <SelectItem value="Factory Workers">Factory Workers</SelectItem>
                  <SelectItem value="Farm Laborers">Farm Laborers</SelectItem>
                  <SelectItem value="Transportation Worker">Transportation Worker</SelectItem>
                  <SelectItem value="Skilled Workers">Skilled Workers</SelectItem>
                  <SelectItem value="Service workers">Service workers</SelectItem>
                </SelectContent>
              </Select>
              
            </FormItem>
          )}
        />
       
        <Button type="submit" size="lg" className="my-4 w-full">
          Submit
        </Button>
         
      </form>
    </Form>
    </Card>
  );
}
