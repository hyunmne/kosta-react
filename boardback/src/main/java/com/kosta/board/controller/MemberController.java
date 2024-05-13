package com.kosta.board.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.board.dto.MemberDto;
import com.kosta.board.service.MemberService;

@RestController
public class MemberController {
	@Autowired
	private MemberService memservice;
	
	@PostMapping("/join")
	public ResponseEntity<MemberDto> join(@RequestBody MemberDto memdto) {
		try {
			memservice.join(memdto);
			return new ResponseEntity<MemberDto>(HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<MemberDto>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<MemberDto> login(@RequestBody Map<String, String> param ){
		try {
			MemberDto memDto = memservice.login(param.get("id"), param.get("password"));
			memDto.setPassword("");
			return new ResponseEntity<MemberDto>(memDto, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<MemberDto>(HttpStatus.BAD_REQUEST);
		}
	}
}
