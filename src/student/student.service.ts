import { Injectable, NotFoundException } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectModel } from '@nestjs/mongoose';
import { student } from './schemas/student.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class StudentService {

    constructor(
        @InjectModel(student.name)
        private studentModel:mongoose.Model<student>
    ){}

    async findAll():Promise<student[]>{
        const students = await this.studentModel.find()
        return students 
    }

    async create(Student : student):Promise<student>{
        const res = await this.studentModel.create(Student)
        return res
    }

    async findstudentbyId(id:string):Promise<student>{
        const studentfindbyId = await this.studentModel.findById(id)

        if(!studentfindbyId){
            throw new NotFoundException('No student records found with this ID !!')
        }
        return studentfindbyId
    }

    async findstudentbyRollno(rollno:string):Promise<student>{
        const studentfindbyRollno = await this.studentModel.findOne({rollno})
        return studentfindbyRollno
    }

    async studentupdatebyId(id:string, Student:student):Promise<student>{
        return await this.studentModel.findByIdAndUpdate(id,Student,
           {
            new:true,
            runValidators:true,
           }
        )
    }

    async deletestudentbyId(id:string):Promise<student>{
        return await this.studentModel.findByIdAndDelete(id)
    }
}
