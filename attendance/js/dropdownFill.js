function populateDropDown() {
    var studentDetails = [
        {
            "Name": "Timothy Pratt",
            "Email": "Duis@quispede.ca"
        },
        {
            "Name": "Phoebe Burns",
            "Email": "nulla.vulputate@Donec.co.uk"
        },
        {
            "Name": "Jorden Moses",
            "Email": "luctus.ut@porttitoreros.net"
        },
        {
            "Name": "Jerome Glover",
            "Email": "eu@eget.ca"
        },
        {
            "Name": "Whoopi Garrett",
            "Email": "Sed.pharetra.felis@etnuncQuisque.com"
        },
        {
            "Name": "Melissa Duke",
            "Email": "molestie.dapibus@faucibusidlibero.org"
        },
        {
            "Name": "Nita Jefferson",
            "Email": "ornare@porta.com"
        },
        {
            "Name": "Rudyard Burns",
            "Email": "malesuada@mauris.org"
        },
        {
            "Name": "Brendan Hendricks",
            "Email": "mi.pede.nonummy@urnanec.org"
        },
        {
            "Name": "Keegan Graham",
            "Email": "scelerisque@utquam.com"
        },
        {
            "Name": "Marah Burgess",
            "Email": "auctor@a.com"
        },
        {
            "Name": "Morgan Morris",
            "Email": "lacus.Ut.nec@sodalesat.co.uk"
        },
        {
            "Name": "Cyrus Conley",
            "Email": "ipsum.Phasellus@vulputateposuere.org"
        },
        {
            "Name": "Amela Olson",
            "Email": "lobortis.Class@enimconsequat.org"
        },
        {
            "Name": "Margaret Brady",
            "Email": "placerat.augue.Sed@utpellentesqueeget.edu"
        },
        {
            "Name": "Hadassah Richards",
            "Email": "egestas.Duis@temporerat.ca"
        },
        {
            "Name": "Irene Farmer",
            "Email": "Quisque.tincidunt@magna.edu"
        },
        {
            "Name": "Chiquita Hughes",
            "Email": "id@temporbibendumDonec.com"
        },
        {
            "Name": "Colby Ramsey",
            "Email": "aliquet.odio.Etiam@perconubianostra.edu"
        },
        {
            "Name": "Jacob Bell",
            "Email": "mauris.ut@nibhvulputate.co.uk"
        },
        {
            "Name": "Walter Stuart",
            "Email": "imperdiet@auguemalesuadamalesuada.ca"
        },
        {
            "Name": "Kato Farrell",
            "Email": "amet.consectetuer.adipiscing@ligula.ca"
        },
        {
            "Name": "Brock Summers",
            "Email": "id@massaSuspendisse.com"
        },
        {
            "Name": "Alyssa Mcintosh",
            "Email": "dis.parturient.montes@urna.org"
        },
        {
            "Name": "Noelani Parks",
            "Email": "ut@risusquisdiam.com"
        },
        {
            "Name": "Carter Trevino",
            "Email": "aliquet.molestie.tellus@Donecfelis.co.uk"
        },
        {
            "Name": "Flynn Abbott",
            "Email": "Fusce.dolor@semperNamtempor.ca"
        },
        {
            "Name": "Leslie Mcdaniel",
            "Email": "velit@imperdieterat.edu"
        },
        {
            "Name": "Zahir Boyer",
            "Email": "molestie.pharetra@faucibusorci.ca"
        },
        {
            "Name": "Castor Campos",
            "Email": "Sed@molestiepharetranibh.edu"
        },
        {
            "Name": "Garrett Clements",
            "Email": "neque@aliquam.edu"
        },
        {
            "Name": "Helen Norton",
            "Email": "ipsum@mi.edu"
        },
        {
            "Name": "Kessie Roth",
            "Email": "in.aliquet@pellentesqueegetdictum.net"
        },
        {
            "Name": "Jermaine Monroe",
            "Email": "nisl.sem@auctorodioa.edu"
        },
        {
            "Name": "Mira Ortega",
            "Email": "tincidunt@id.ca"
        },
        {
            "Name": "Martena Buchanan",
            "Email": "Mauris.non@semperet.edu"
        },
        {
            "Name": "Warren Greene",
            "Email": "Fusce@tristiquepellentesquetellus.com"
        },
        {
            "Name": "Derek Mcintosh",
            "Email": "pede@tinciduntnibh.ca"
        },
        {
            "Name": "Victor Moss",
            "Email": "malesuada@metusVivamuseuismod.org"
        },
        {
            "Name": "Hope Fletcher",
            "Email": "eu@Curabiturdictum.ca"
        },
        {
            "Name": "Kaseem Oneill",
            "Email": "faucibus@vehiculaPellentesque.net"
        },
        {
            "Name": "Jordan Dotson",
            "Email": "vel.venenatis@dolorFuscefeugiat.org"
        },
        {
            "Name": "Wallace Clarke",
            "Email": "egestas@arcu.edu"
        },
        {
            "Name": "Tanisha Robertson",
            "Email": "blandit.mattis.Cras@nisinibhlacinia.com"
        },
        {
            "Name": "Rajah Dyer",
            "Email": "eget.mollis.lectus@adipiscingenim.co.uk"
        },
        {
            "Name": "Justina Mccullough",
            "Email": "Nunc.pulvinar@Nunc.ca"
        },
        {
            "Name": "Hayfa Day",
            "Email": "dui.quis@erat.net"
        },
        {
            "Name": "Clinton Cherry",
            "Email": "ut.erat.Sed@adipiscing.ca"
        },
        {
            "Name": "Travis Robles",
            "Email": "neque@lobortisnisi.ca"
        },
        {
            "Name": "Haviva Long",
            "Email": "Maecenas.iaculis@convallis.co.uk"
        },
        {
            "Name": "Kaden England",
            "Email": "nec@at.edu"
        },
        {
            "Name": "Nina Moss",
            "Email": "Donec@Aliquamultrices.net"
        },
        {
            "Name": "Charde Garrett",
            "Email": "neque.non@tristiquealiquet.co.uk"
        },
        {
            "Name": "Scott Church",
            "Email": "et.libero.Proin@posuerevulputate.co.uk"
        },
        {
            "Name": "Justina Watts",
            "Email": "erat.Vivamus@aliquam.com"
        },
        {
            "Name": "Wallace Clements",
            "Email": "ipsum.non.arcu@Sed.ca"
        },
        {
            "Name": "Maryam Dodson",
            "Email": "a.malesuada@dapibus.edu"
        },
        {
            "Name": "Katelyn Riggs",
            "Email": "lorem.semper.auctor@pellentesquetellus.org"
        },
        {
            "Name": "Dalton Marsh",
            "Email": "id@eu.edu"
        },
        {
            "Name": "Bertha Burnett",
            "Email": "dolor@magnis.org"
        },
        {
            "Name": "Isaac Castillo",
            "Email": "Etiam.bibendum@feliseget.com"
        },
        {
            "Name": "Steven Ayers",
            "Email": "rhoncus.id.mollis@ac.co.uk"
        },
        {
            "Name": "Kimberly Randolph",
            "Email": "velit.dui.semper@semper.net"
        },
        {
            "Name": "Signe Chavez",
            "Email": "tempor.augue.ac@lectusasollicitudin.org"
        },
        {
            "Name": "Aaron Becker",
            "Email": "et.risus@Suspendisse.com"
        },
        {
            "Name": "Brennan Mccarthy",
            "Email": "dolor.dapibus.gravida@nisidictum.com"
        },
        {
            "Name": "Oren Foley",
            "Email": "risus.Donec@DonecnibhQuisque.org"
        },
        {
            "Name": "Lani Mueller",
            "Email": "nec.imperdiet@egestashendrerit.com"
        },
        {
            "Name": "Kevyn Duran",
            "Email": "arcu.Vivamus.sit@risusatfringilla.org"
        },
        {
            "Name": "Hedley Daniels",
            "Email": "mi.pede@Donecest.org"
        },
        {
            "Name": "Madeson Barry",
            "Email": "non@aliquetodio.edu"
        },
        {
            "Name": "Britanney Burgess",
            "Email": "nunc@aliquetmolestie.net"
        },
        {
            "Name": "Hoyt Sargent",
            "Email": "rutrum.eu@ante.org"
        },
        {
            "Name": "Odette Mcdonald",
            "Email": "accumsan.neque@habitant.co.uk"
        },
        {
            "Name": "Brandon Hendricks",
            "Email": "Cras.lorem.lorem@nondapibusrutrum.net"
        },
        {
            "Name": "Madeson Gross",
            "Email": "ipsum.Suspendisse@acturpis.org"
        },
        {
            "Name": "Leila Shannon",
            "Email": "sollicitudin.a.malesuada@anteipsum.edu"
        },
        {
            "Name": "Nevada Finley",
            "Email": "at.sem.molestie@non.com"
        },
        {
            "Name": "Ryder Buckner",
            "Email": "dignissim.magna.a@luctusut.ca"
        },
        {
            "Name": "Lance Cooper",
            "Email": "velit.Cras.lorem@eratvolutpat.org"
        },
        {
            "Name": "Chase Cleveland",
            "Email": "nunc.id.enim@Loremipsum.co.uk"
        },
        {
            "Name": "Wallace Hess",
            "Email": "ullamcorper.Duis.cursus@vitaeposuere.com"
        },
        {
            "Name": "Magee Strong",
            "Email": "molestie.pharetra.nibh@Aliquam.com"
        },
        {
            "Name": "Megan Hartman",
            "Email": "pede.malesuada.vel@estac.ca"
        },
        {
            "Name": "Graiden Livingston",
            "Email": "quam.Pellentesque@consequatpurusMaecenas.org"
        },
        {
            "Name": "Callum Ferrell",
            "Email": "et.magnis.dis@euismodindolor.ca"
        },
        {
            "Name": "Shafira Hernandez",
            "Email": "quis.turpis@per.edu"
        },
        {
            "Name": "Zane Franklin",
            "Email": "gravida.molestie@nonummy.co.uk"
        },
        {
            "Name": "Moses Hobbs",
            "Email": "sed.libero@iaculisneceleifend.edu"
        },
        {
            "Name": "Farrah Mcdaniel",
            "Email": "nulla.In@vel.ca"
        },
        {
            "Name": "Aurelia Bean",
            "Email": "odio.Aliquam@natoque.org"
        },
        {
            "Name": "Ryan Good",
            "Email": "commodo@semeget.co.uk"
        },
        {
            "Name": "Aretha James",
            "Email": "aliquet.odio.Etiam@Suspendissecommodo.ca"
        },
        {
            "Name": "Walker Durham",
            "Email": "neque.et@ametdapibusid.co.uk"
        },
        {
            "Name": "Nero Whitley",
            "Email": "eu.tempor@felisNulla.ca"
        },
        {
            "Name": "Carla Curtis",
            "Email": "felis@egetlacusMauris.ca"
        },
        {
            "Name": "Reese Bonner",
            "Email": "Quisque.ornare@uterat.ca"
        },
        {
            "Name": "Hedda Marsh",
            "Email": "at@elementumpurus.org"
        },
        {
            "Name": "Debra Santos",
            "Email": "luctus.aliquet.odio@mattisvelitjusto.org"
        },
        {
            "Name": "Bruno Gutierrez",
            "Email": "enim.Etiam@duiquis.org"
        }
    ];

    var emailList = document.getElementById("fillEmail");

    for (var i = 0; i < studentDetails.length; i++) {
        var option = document.createElement("option");

        option.innerHTML = studentDetails[i].Email;

        // Set the student id in value part 
        option.value = i;

        // Set id for each email 
        option.id = i;

        // Add the option element in the dropdown list 
        emailList.options.add(option);

        

    }

}
