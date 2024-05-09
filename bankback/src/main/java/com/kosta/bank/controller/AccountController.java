package com.kosta.bank.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.bank.dto.AccountDto;
import com.kosta.bank.service.AccountService;

@RestController // view 없이 data만 주고 받는 controller
public class AccountController {

	@Autowired
	private AccountService accService;
	
	@GetMapping("/checkAccId")
	public ResponseEntity<String> checkAccId(@RequestParam("id") String id) {
		try {
			Boolean isId = accService.checkAccountDoubleId(id);
			return new ResponseEntity<String>(String.valueOf(isId), HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/accountInfo")
	public ResponseEntity<AccountDto> accountInfo(@RequestParam("id") String id) {
		try {
			AccountDto accDto = accService.accountInfo(id);
			return new ResponseEntity<AccountDto>(accDto, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<AccountDto>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/allAccountInfo")
	public ResponseEntity<List<AccountDto>> allAccountInfo() {
		try {
			List<AccountDto> accList = accService.accList();
			return new ResponseEntity<List<AccountDto>>(accList, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<AccountDto>>(HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/makeAccount") 
	public ResponseEntity<String> makeAccount(@RequestBody AccountDto accDto) {
		try {
			accService.makeAccount(accDto);
			return new ResponseEntity<String>("계좌개설성공", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	
	@PostMapping("/deposit")
	public ResponseEntity<Object> deposit(@RequestBody Map<String, Object> param) {
		try {
			accService.deposit((String)param.get("id"), Integer.parseInt((String)param.get("money")));
			AccountDto accDto =  accService.accountInfo((String)param.get("id"));
			return new ResponseEntity<Object>(accDto.getBalance(), HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PostMapping("/withdraw")
	public ResponseEntity<Object> withdraw(@RequestBody Map<String, Object> param) {
		try {
			accService.withdraw((String)param.get("id"), Integer.parseInt((String)param.get("money")));
			AccountDto accDto = accService.accountInfo((String)param.get("id"));
			return new ResponseEntity<Object>(accDto.getBalance(), HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
