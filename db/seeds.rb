# encoding: utf-8
[
  {
    :name => 'Betabeers',
    :description => 'Betabeers está de vuelta este mes con una charla sobre CodeIgniter de la mano de Jose Argudo y las presentaciones de Bisicalc por César Gómez, Chicisimo por David Bolufer y Kaira por Luis Peris.',
    :day => 2,
    :month => Date.today.month,
    :year => Date.today.year,
    :organizer => 'Betabeers',
    :location => 'Parc Cientifiq, Catedrático Agustín Escardino 9, Paterna',
    :location_url => 'http://maps.google.com/maps?q=catedratico+agustin+escardino,+Paterna,+Espa%C3%B1a&hl=es&ie=UTF8&ll=39.519867,-0.435419&spn=0.03337,0.084543&sll=39.502065,-0.440599&sspn=0.534056,1.352692&vpsrc=0&hq=catedratico+agustin+escardino,&hnear=Paterna,+Valencia,+Comunidad+Valenciana,+Espa%C3%B1a&t=m&z=14&iwloc=A',
    :time => '18:30',
    :icon => 'beer',
    :follow => 'http://betabeers.com/c/valencia/'
  },
  {
    :name => 'OpenSource HackNight',
    :description => 'Next edition of the OpenSource HackNight. At peertransfer valencia office we are big supporters of the open source world, so we thought that it would be cool to sit together and see if we can give something back to the community. We are opening our offices from 19:00 to come and hack together.',
    :day => 16,
    :month => Date.today.month,
    :year => Date.today.year,
    :organizer => 'Peertransfer',
    :location => 'peerTransfer, Edificio Europa Avenida de Aragon, 30, 13-J',
    :location_url => 'http://maps.google.es/maps?q=Av+de+Arag%C3%B3n,+30,+46021+Valencia&hl=es&ie=UTF8&ll=39.471798,-0.357506&spn=0.010087,0.01929&sll=39.471931,-0.360317&sspn=0.010087,0.01929&vpsrc=0&hnear=Av+de+Arag%C3%B3n,+30,+46021+Valencia,+Comunidad+Valenciana&t=m&z=16',
    :time => '19:00',
    :icon => 'code',
    :follow => 'https://gist.github.com/1363768'
  }
].each do |event_data|
  Event.create(event_data)
end
