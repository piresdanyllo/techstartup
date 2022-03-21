package code.startup.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import code.startup.utils.UploadFileUtil;



@CrossOrigin
@RestController
@RequestMapping("escola")
public class UploadFileController {

	@PostMapping("/enviar/{id_funcionario}")
	public ResponseEntity<String> enviarArquivo(@PathVariable Integer id_funcionario, MultipartFile foto, @RequestParam(value = "nome") String nome){
		
		String fileName = nome;
		String uploadDir = "C:/Users/Bruno/Documents/Projetos/Java/StartupProject/src/assets/img";
		String nomeMaisCaminho = uploadDir + "/" + nome;
		
		try {
			UploadFileUtil.salvarFotos(uploadDir, fileName, foto);
		} catch (Exception e) {
			System.out.println("O arquivo não foi enviado" + e);
		}
		
		System.out.println("Deu certo: " + nomeMaisCaminho);
		return ResponseEntity.ok("Arquivo enviado");
	}
}
