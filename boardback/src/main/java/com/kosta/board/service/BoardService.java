package com.kosta.board.service;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.kosta.board.dto.BoardDto;
import com.kosta.board.util.PageInfo;

public interface BoardService {
	Integer boardWrite(String subject, String content, String writer, MultipartFile[] files) throws Exception;
	List<BoardDto> boardListByPage(PageInfo pageInfo, String type, String word) throws Exception;
	BoardDto boardDetail(Integer num) throws Exception;
//	void boardModify(BoardDto boardDto, MultipartFile file) throws Exception;
	Boolean isSelectedBrdLike(String memberId, Integer boardNum) throws Exception;
	Boolean checkBoardLike(String memberId, Integer boardNum) throws Exception;
	Integer deleteBoard(Integer num) throws Exception;
}
