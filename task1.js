const fs = require('fs');

const filePath1 = '/home1/ugrads/q6ptb/Desktop/Cs2613-Lab/Lab7/calculations1.json';
const filePath2 = '/home1/ugrads/q6ptb/Desktop/Cs2613-Lab/Lab7/calculations2.json';
const filePath3 = '/home1/ugrads/q6ptb/Desktop/Cs2613-Lab/Lab7/calculations3.json';
const filePath4 = '/home1/ugrads/q6ptb/Desktop/Cs2613-Lab/Lab7/calculations4.json';
try
{
    let data = fs.readFileSync('/home1/ugrads/q6ptb/Desktop/Cs2613-Lab/Lab7/calculations1.json','utf-8');
    let jsonData = JSON.parse(data);
    array_num1 = [4];
    name_p1 = [4]
    
    name_p1[0] = jsonData.data.calculations[0].performer;
    name_p1[1] = jsonData.data.calculations[1].performer;
    name_p1[2] = jsonData.data.calculations[2].performer;
    name_p1[3] = jsonData.data.calculations[3].performer;
  
    array_num[0] = parseFloat(jsonData.data.calculations[0].calc);
    array_num[1] = parseFloat(jsonData.data.calculations[1].calc);
    array_num[2] = parseFloat(jsonData.data.calculations[2].calc);
    array_num[3] = parseFloat(jsonData.data.calculations[3].calc);
    console.log(name_p1[0])
    for( i = 1; i < 4; i++)
    {
        array_num[i] = Math.abs(array_num[i] - array_num[0]);
    }

    data = fs.readFileSync(filePath2,'utf-8');
    jsonData = JSON.parse(data);
    array_num2 = [4];


    
    
    array_num2[0] = parseFloat(jsonData.data.calculations[0].calc);
    array_num2[1] = parseFloat(jsonData.data.calculations[1].calc);
    array_num2[2] = parseFloat(jsonData.data.calculations[2].calc);
    array_num2[3] = parseFloat(jsonData.data.calculations[3].calc);

    for( i = 1; i < 4; i++)
    {
        array_num2[i] = Math.abs(array_num2[i] - array_num2[0]);
    }

    data = fs.readFileSync(filePath3,'utf-8');
    jsonData = JSON.parse(data);
    array_num3 = [4];


    
    
    array_num2[0] = parseFloat(jsonData.data.calculations[0].calc);
    array_num2[1] = parseFloat(jsonData.data.calculations[1].calc);
    array_num2[2] = parseFloat(jsonData.data.calculations[2].calc);
    array_num2[3] = parseFloat(jsonData.data.calculations[3].calc);

    for( i = 1; i < 4; i++)
    {
        array_num3[i] = Math.abs(array_num3[i] - array_num3[0]);
    }

    
    data = fs.readFileSync(filePath4,'utf-8');
    jsonData = JSON.parse(data);
    array_num4 = [4];


    
    
    array_num4[0] = parseFloat(jsonData.data.calculations[0].calc);
    array_num4[1] = parseFloat(jsonData.data.calculations[1].calc);
    array_num4[2] = parseFloat(jsonData.data.calculations[2].calc);
    array_num4[3] = parseFloat(jsonData.data.calculations[3].calc);



    for( i = 1; i < 4; i++)
    {
        array_num4[i] = Math.abs(array_num4[i] - array_num4[0]);
    }

    data = fs.readFileSync(filePath4,'utf-8');
    jsonData = JSON.parse(data);
    array_num5 = [4];


    
    
    array_num5[0] = parseFloat(jsonData.data.calculations[0].calc);
    array_num5[1] = parseFloat(jsonData.data.calculations[1].calc);
    array_num5[2] = parseFloat(jsonData.data.calculations[2].calc);
    array_num5[3] = parseFloat(jsonData.data.calculations[3].calc);
    for(i=0; i <4; i++)
    {
        console(array_num5[i])
    }
    for( i = 1; i < 4; i++)
    {
        array_num5[i] = Math.abs(array_num5[i] - array_num5[0]);
    }

    for(i = 0; i < 4; i++)
    {
        array_num[i] = Math.abs(array_num1[i] + array_num2[i] + array_num3[i] + array_num4[i] + array_num5[i])
    }

    for(i=1; i < 4; i++)
    {
        array_num[i] = Math.abs(array_num[i]-array_num[0]);
    }

    for(i=0; i < 4; i++){  
        for(j=1; j < (4-i); j++){  
                 if(array_num1[4-1] > array_num1[j]){  
                        //swap elements  
                        temp = array_num[j-1];  
                        temp1 = name_p[j-1]
                        array_num1[j-1] = array_num1[j];  
                        array_num1[j] = temp;  
                        name_p[j-1] = name_p[j];  
                        name_p[j] = temp1; 
                }  
                 
        } 
    }
    for(i=1; i <4; i++)
    {
        console.log(""+ i + ". " + name_p1[i] + ": " + "("+array_num1[i]+ ")\n")
    } 

    
    



}
catch(err)
{
    console.error('Error reading file: ' .err);
}