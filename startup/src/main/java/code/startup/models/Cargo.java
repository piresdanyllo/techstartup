package code.startup.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Cargo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cargo;
	
	@Column(nullable = false, length = 60)
	private String nome_cargo;
	
	@Column(nullable = false, length = 120)
	private String nivel_cargo;
	
	@OneToMany(mappedBy = "cargo")
	private List<Funcionario> funcionario = new ArrayList<>();

	public Integer getId_cargo() {
		return id_cargo;
	}

	public void setId_cargo(Integer id_cargo) {
		this.id_cargo = id_cargo;
	}

	public String getNome_cargo() {
		return nome_cargo;
	}

	public void setNome_cargo(String nome_cargo) {
		this.nome_cargo = nome_cargo;
	}

	public String getNivel_cargo() {
		return nivel_cargo;
	}

	public void setNivel_cargo(String nivel_cargo) {
		this.nivel_cargo = nivel_cargo;
	}

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}
	
}
