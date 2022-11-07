import { Length } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToMany(() => Task, (task) => task.project, { cascade: true })
  @JoinColumn()
  tasks: Task[];
}
