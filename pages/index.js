import MainGrid from '../src/components/MainGrind'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return(
    <Box>
     <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'zenarko';
  const pessoasFavoritas = ['juunegreiros', 
    'omariosouto', 'peas', 'rafaballerini',
    'marcobrunodev', 'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
         <h1 className="title"> 
           Bem vindo(a)
         </h1>

          <OrkutNostalgicIconSet />
        </Box>
        </div>
        <div className="profileRelationArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
        
            <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

          <ul>
            {pessoasFavoritas.map((itemAtual) => { 
              return(
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>  
                  </a>
                </li>                
              )
            })}           
          </ul>
          </ProfileRelationsBoxWrapper>     
        </div>        
      </MainGrid>
    </>
  
  )
}
