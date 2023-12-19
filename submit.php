<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $projectName = $_POST["project-name"];
    $projectDescription = $_POST["project-description"];
    $budget = $_POST["budget"];

    $to = "anastasiyaibankoagency@gmail.com"; // Замените на ваш email
    $subject = "New Project Brief Submission";
    $message = "Project Name: $projectName\n\nProject Description: $projectDescription\n\nBudget: $budget";

    $headers = "From: anastasiyaibankoagency@gmail.com"; // Замените на ваш email

    // Отправка письма
    
    mail($to, $subject, $message, $headers);
}
?>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $projectName = $_POST["project-name"];
    $projectDescription = $_POST["project-description"];
    $budget = $_POST["budget"];

    $to = "anastasiyaibankoagency@gmail.com"; // Замените на ваш email
    $subject = "New Project Brief Submission";
    $message = "Project Name: $projectName\n\nProject Description: $projectDescription\n\nBudget: $budget";

    $headers = "From: webstudio@example.com"; // Замените на ваш email

    // Отправка письма
    mail($to, $subject, $message, $headers);

    // Добавим ответ для клиента (JavaScript может обработать этот ответ)
    echo "success";
}
?>
