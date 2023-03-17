package com.boot.tmsystem.exception;

import com.boot.tmsystem.customexception.EmptyInputException;
import com.boot.tmsystem.customexception.IdNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends RuntimeException {

    @ExceptionHandler(EmptyInputException.class)
    public ResponseEntity<String> handleEmptyInput(EmptyInputException emptyInputException){

        return new ResponseEntity<String>("Input Fields are Empty", HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<String> handleIdNotFound(IdNotFoundException idNotFoundException){

        return new ResponseEntity<String>("ID Not Found", HttpStatus.BAD_REQUEST);

    }

}
