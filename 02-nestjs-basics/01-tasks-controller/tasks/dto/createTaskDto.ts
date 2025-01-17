import { IsIn, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../task.model";

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsIn([...Object.values(TaskStatus)])
  status: TaskStatus;
}
