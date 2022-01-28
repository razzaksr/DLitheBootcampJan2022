package poc.basic.react.DLitheBootcampBasicPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poc.basic.react.DLitheBootcampBasicPOC.entity.Corporate;
import poc.basic.react.DLitheBootcampBasicPOC.repository.CorporateRepository;

/*
 * save(object)	// new/ update>> if primary key/id object already there it will update, else add the new entity 
 * findAll()	// list<entity>
 * findById(id)>> json/xml / getById(id)>> xml>> dataformat.xml	// entity/ corporate
 * deleteById(id)/delete(object)	>> void
 */

@Service
public class CorporateService
{
	@Autowired	// get the instance/memory of the component
	CorporateRepository repo;
	
	public Corporate interact(Corporate object)
	{
		return repo.save(object);// pass the entity object that can be converted as record in the table
	}
	
	public List<Corporate> readEverything()
	{
		return repo.findAll();
	}
	
	public Corporate readOne(String id)
	{
		return repo.findById(id).orElse(new Corporate());
	}
	
	public String eraseOne(String id)
	{
		String name=readOne(id).getOrg()+" "+readOne(id).getBasic()+" has deleted\n";
		repo.deleteById(id);
		return name;
	}
}
