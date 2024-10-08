import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { student } from './schemas/student.schema';
import { createstudentCheck } from './DTO/student.dto';
import { updatestudentCheck } from './DTO/createStudent.dto';
import { identity } from 'rxjs';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}

    @Get()
    async getAllStudents(): Promise<student [] >{
        return this.studentService.findAll()
    }
    @Post('newStudent')
    async createnewStudent(
        @Body()
        student:createstudentCheck,
    ):Promise<student >{
        return this.studentService.create(student)}

        @Get(':id')
        async getstudentbyId(
            @Param('id')
            id:string
        ):Promise<student >{
            return this.studentService.findstudentbyId(id)
        }  

        @Get('rollno')
        async getstudentbyRollno(
            @Param('studentRollno') 
            rollno:string
        ):Promise<student>{
            return this.studentService.findstudentbyRollno(rollno)
        }

        @Put(':id')
        async studentUpdate(
            @Param('id')
            id:string,
            @Body()
            student:updatestudentCheck
        ):Promise<student>{
            return this.studentService.studentupdatebyId(id,student)
        }
    
        @Delete(':id')
        async studentDelete(
            @Param('id')
            id:string
        ):Promise<student>{
            return this.studentService.deletestudentbyId(id)
        }
    }
