import { Button } from "@material-tailwind/react";
 
export function ButtonDefault() {
  return (
  <div className="flex w-max items-center gap-4">
     <a href="#buttons-with-link">
      <Button 
      variant="filled"
      size="base"
      color="text-white"
      className="bg-black py-1.5 px-4 rounded-md font-medium w-20 h-6"
      >
        CONTACTO 
      </Button>
      </a>
</div>
  )
}

