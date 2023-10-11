public function get_student_info($email) {
    try{
        $sql = "SELECT * FROM tbl_students WHERE email = '$email';";

        $result = $this->db->query($sql);

        $this->db->db_close();

        if ($result->num_rows > 0) {
            $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
            return $rows;
        }
        else {
            return [];
        }
    }
    catch (Exception $e) {
        return [];
    }
}