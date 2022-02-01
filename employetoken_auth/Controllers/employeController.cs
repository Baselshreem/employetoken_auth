using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace employetoken_auth.Controllers
{
    [Authorize]
    public class employeController : ApiController
    {





        // يجب ان تبدا بكلمةGet او وضع httpget
        [HttpGet]
        
        public IEnumerable<employe> Get()
        {

            using (employedbEntities entities = new employedbEntities())
            {
                return entities.employes.ToList();
            }
        }



 





}
}
