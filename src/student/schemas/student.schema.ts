import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema()
export class student  { 

    @Prop()
    studentRollno: string;

   
    @Prop() 
    studentName: string;

    
    @Prop()
    studentClass: string;
}


export const StudentSchema = SchemaFactory.createForClass(student);
