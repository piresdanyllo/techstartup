package code.startup.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import code.startup.models.Beneficios;
import code.startup.models.Funcionario;
import code.startup.services.BeneficiosService;

@CrossOrigin
@RestController
@RequestMapping("startup")
public class BeneficiosController {

	@Autowired
	private BeneficiosService beneficiosService;
	
	@GetMapping("/beneficios")
	public List<Beneficios> mostrarTodosBeneficios(){
		List<Beneficios> beneficios = beneficiosService.mostrarTodosBeneficios();
		return beneficios;
	}
	
	@GetMapping("/beneficios/{codigo}")
	public ResponseEntity<Beneficios> buscarUmBeneficios(@PathVariable Integer codigo){
		Beneficios beneficios = beneficiosService.buscarUmBeneficio(codigo);
		return ResponseEntity.ok().body(beneficios);
	}
	
	@GetMapping("/beneficios-funcionario/{id_funcionario}")
	public List<Beneficios> buscarBeneficiosFuncionario(@PathVariable Integer id_funcionario){
		List<Beneficios> beneficios = beneficiosService.buscarBeneficioFuncionario(id_funcionario);
		return beneficios;
	}
	
	@PostMapping("/beneficios/{id_funcionario}")
	public ResponseEntity<Beneficios> cadastrarBeneficio(@PathVariable Integer id_funcionario, @RequestBody Beneficios beneficios){
		beneficios = beneficiosService.adicionarBeneficio(beneficios, id_funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(beneficios.getCodigo()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/beneficios/{codigo}")
	public ResponseEntity<Void> editarBeneficio(@RequestParam(value = "funcionario") Funcionario funcionario, @PathVariable Integer codigo, @RequestBody Beneficios beneficios){
		beneficios.setCodigo(codigo);
		beneficios.setFuncionario(funcionario);
		beneficios = beneficiosService.editarBeneficio(beneficios);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/beneficios/{codigo}")
	public ResponseEntity<Void> deletarBeneficio(@PathVariable Integer codigo){
		beneficiosService.deletarBeneficio(codigo);
		return ResponseEntity.noContent().build();
	}	
}
