package code.startup.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_funcionario;
	
	@Column(nullable = false, length = 60)	
	private String nome_funcionario;
	
	@Column(nullable = false, length = 60)
	private String cidade_funcionario;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_cargo")
	private Cargo cargo;
	
	public Integer getId_funcionario() {
		return id_funcionario;
	}

	public void setId_funcionario(Integer id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getNome_funcionario() {
		return nome_funcionario;
	}

	public void setNome_funcionario(String nome_funcionario) {
		this.nome_funcionario = nome_funcionario;
	}

	public String getCidade_funcionario() {
		return cidade_funcionario;
	}

	public void setCidade_funcionario(String cidade_funcionario) {
		this.cidade_funcionario = cidade_funcionario;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	
}
