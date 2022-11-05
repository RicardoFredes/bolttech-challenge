import { Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Task } from "./task.entity";
import { User } from "./user.entity";

@Entity({ name: "projects" })
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(3, 20)
  title: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn()
  user: User;

  @Column({ select: false })
  userId: string;

  @OneToMany(() => Task, (task) => task.project)
  @JoinColumn()
  tasks: Task[];
}
