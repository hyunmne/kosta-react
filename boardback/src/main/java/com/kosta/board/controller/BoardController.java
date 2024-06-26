package com.kosta.board.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kosta.board.dto.BoardDto;
import com.kosta.board.service.BoardService;
import com.kosta.board.util.PageInfo;

@RestController
public class BoardController {

	@Value("${upload.path}")
	private String uploadPath;
	
	@Autowired
	private BoardService brdService;
	
	@GetMapping("/boardList")
	public ResponseEntity<Map<String,Object>> boardList(@RequestParam(name="page", required=false, defaultValue="1") Integer page,
													  @RequestParam(name="type", required=false) String type,
													  @RequestParam(name="word", required=false) String word
	){
		Map<String,Object> res = new HashMap<>();
		try {
			PageInfo pageInfo = PageInfo.builder().curPage(page).build();
			List<BoardDto> brdList = brdService.boardListByPage(pageInfo, type, word);
			res.put("boardList", brdList);
			res.put("pageInfo", pageInfo);
			return new ResponseEntity<Map<String,Object>>(res,HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Map<String,Object>>(HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping("/deleteBoard")
	public ResponseEntity<Integer> deleteBoard(@RequestParam("num") Integer num){
		try {
			Integer boardNum = brdService.deleteBoard(num);
			return new ResponseEntity<Integer>(boardNum, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/boardWrite")
	public ResponseEntity<Integer> boardWrite(@RequestParam("subject") String subject,
			@RequestParam("content") String content, @RequestParam("writer") String writer,
			@RequestParam(name="file", required=false) MultipartFile[] files){
		try {
			Integer boardNum = brdService.boardWrite(subject, content, writer, files);
			return new ResponseEntity<Integer>(boardNum, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping({"/boardDetail/{num}/{id}", "/boardDetail/{num}"})
	public ResponseEntity<Map<String, Object>> boardDetail(@PathVariable Integer num, 
			@PathVariable(required=false) String id){
		try {
			Map<String, Object> res = new HashMap<>();
			BoardDto brdDto = brdService.boardDetail(num);
			res.put("board", brdDto);
			if(id==null) {
				res.put("like",null);
			} else {
				res.put("like", brdService.isSelectedBrdLike(id, num));
			}
			return new ResponseEntity<Map<String, Object>>(res, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Map<String, Object>>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/image/{num}")
	public void image(@PathVariable String num, HttpServletResponse response) {
		try {
			FileInputStream fis = new FileInputStream(new File(uploadPath, num));
			OutputStream out = response.getOutputStream();
			FileCopyUtils.copy(fis, out);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
