import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Length, IsEmail } from "class-validator";
import { Project } from "./project.entity";
import { Task } from "./task.entity";

@Unique(["email"])
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(3, 20)
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(8)
  password: string;

  @Column({ nullable: true })
  token: string;

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  withoutPassword() {
    return Object.fromEntries(Object.entries(this).filter(([key]) => key !== "password"));
  }
}
