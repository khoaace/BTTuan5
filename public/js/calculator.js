module.exports.calc = function (first_Num,second_Num,method_calc1) {

        var result_calc;
    if(isNaN(first_Num))
    {
        return "Giá trị ở ô thứ nhất không phải là số";
    }
    if(isNaN(second_Num))
    {
        return  "Giá trị ở ô thứ hai không phải là số";
    }
    if((first_Num=="") || (second_Num==""))
    {
        return "Ô nhập số không được để rỗng";
    }
    if((method_calc1 != "add" )&&(method_calc1 != "sub" )&&(method_calc1 != "mult" )&&(method_calc1 != "divi" ))
    {
        return  "Chưa chọn phép tính";
    }
        switch(method_calc1)
        {
            case "add":
                result_calc = Number(first_Num) + Number(second_Num);
                break;
            case "sub":
                result_calc = Number(first_Num) - Number(second_Num);
                break;
            case "mult":
                result_calc = Number(first_Num) * Number(second_Num);
                break;
            case "divi":
                result_calc = Number(first_Num) / Number(second_Num);
                break;
        }
        return result_calc;

}

