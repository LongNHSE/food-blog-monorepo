import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';

const AvatarComponent = () => {
  return (
    <Avatar className=" w-16 h-16">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
