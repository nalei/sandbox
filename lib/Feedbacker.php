<?php
class Feedback {

    private $dataPath = 'data/feedback.csv';
    private $emailsPath = 'data/emails.csv';

    private $arNotifyEmails = array();

    public function order($data)
    {
        $arOrderData = array(
            $data['modeName'],
            $data['phone'],
            date('d.m.Y H:i:s'),
        );

        if (($handle = fopen($this->dataPath, "a+")) !== false) {
            fputcsv($handle, $arOrderData, ';');
            fclose($handle);
        }

        // письмо
        $tmplPath = 'mail/feedback.html';
        $message = file_get_contents($tmplPath);
        $arReplace = array(
            '[[feedback-mode]]' => $data['modeName'],
            '[[feedback-phone]]' => $data['phone'],
        );
        foreach ($arReplace as $from=>$to) {
            $message = str_replace($from, $to, $message);
        }
        $this->loadEmails();
        $subject = 'Robot Calls. New request';

        $_success = 0;
        foreach ($this->arNotifyEmails as $emailTo) {
            $mail = new PHPMailer();
            $mail->Mailer = 'sendmail';
            $mail->FromName = 'Robot Calls';
            $mail->AddAddress($emailTo);
            $mail->IsHTML(true);
            $mail->Subject = $subject;
            $mail->CharSet = 'UTF-8';
            $mail->ContentType = "text/html";
            $mail->Encoding = "base64";
            $mail->Body = $message;
            $res = $mail->Send();
            if ($res) ++$_success;
        }

        return true;
    }

    private function loadEmails()
    {
        $this->arNotifyEmails = file($this->emailsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    }
}