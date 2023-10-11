public function student($email_student = ""){
    if(!empty($email_student)) {
        $arr_data['datainfo'] = $this->logic("Login_model")->get_student_info($email_student);
        if (!empty($arr_data['datainfo'])) {
            $json_data = json_encode($arr_data['datainfo']);
            echo $json_data;
        }
        else {
            echo "EMPTY ROW";
        }
    }
    else {
        echo "ERROR";
    }
}