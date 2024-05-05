using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace MedicalAPI
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsControllers : ControllerBase
    {
        private static List<Contacts> _Contacts = new List<Contacts>()
        {
            new Contacts{ID="2",Name="Gokul",Email="gokul@2321.com",Phone="5726129182"},
            new Contacts{ID="3",Name="Krish",Email="Krish@2321.com",Phone="36417219182"},
            new Contacts{ID="4",Name="Murugan",Email="murugan@2321.com",Phone="57223472182"}
        };

        //Get : api/Contacts
        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(_Contacts);
        }

        //Get: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetMedicine(string id)
        {
            var medicine = _Contacts.Find(m => m.ID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        //adding a new medicine
        //POST : api/Contacts

        [HttpPost]
        public IActionResult PostMedicine([FromBody] Contacts Medicine)
        {
            _Contacts.Add(Medicine);
            //You might want to return createdAtAction or another appropriate response
            return Ok();
        }

        // Updating an Existing Medicine
        //PUT: api/Contacts/1

        [HttpPut("{id}")]
        public IActionResult PutMedicine(string id, [FromBody] Contacts medicine)
        {
            var index = _Contacts.FindIndex(m => m.ID == id);
            if (index < 0)
            {
                return NotFound();
            }
            _Contacts[index] = medicine;
            //You might want to return NoContent or another appropriate response
            return Ok();
        }

        //Deleting an existing madicine
        //Delete : api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteContact(string id)
        {
            var medicine = _Contacts.Find(m => m.ID == id);
            if (medicine == null)
            {
                return NotFound();
            }
            _Contacts.Remove(medicine);
            //you might want to return no content or another appropriate response
            return Ok();
        }
    }
}