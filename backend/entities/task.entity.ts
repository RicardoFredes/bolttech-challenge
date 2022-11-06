import { Length } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./project.entity";
import { User } from "./user.entity";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(3, 20)
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  done: boolean;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn()
  project: Project;

  @Column({ select: false })
  projectId: string;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn()
  user: User;

  @Column({ select: false })
  userId: string;
}
