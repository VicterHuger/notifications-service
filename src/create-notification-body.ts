import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsInt()
  recipientId: number;
  @IsNotEmpty()
  @IsString()
  @Length(5, 250)
  content: string;
  @IsNotEmpty()
  @IsString()
  category: string;
}
