package poc.basic.react.DLitheBootcampBasicPOC.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import poc.basic.react.DLitheBootcampBasicPOC.entity.Corporate;
import poc.basic.react.DLitheBootcampBasicPOC.service.CorporateService;

@RestController
@RequestMapping("/rest")
// inform the back end and accept the requests from url of react
@CrossOrigin(origins = "http://localhost:3000")
public class APIController 
{
	@Autowired
	CorporateService service;
	
	// '/rest/new'
	// infosys has successfully inserted
	@PostMapping("/new")
	public String happy(@RequestBody Corporate corp)
	{
		return service.addingNewOne(corp).getOrg()+" has successfully inserted";
	}
	
	@GetMapping("/")
	public List<Corporate> hogan()
	{
		return service.readEverything();
	}
}
