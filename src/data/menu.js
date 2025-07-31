export var menuItems={
  "data": [
    {
      "headTitle1": "Sistema de Licitações",
      "headTitle2": "Gestão de Licitações Públicas",
      "type": "headtitle"
    },
    {
      "title": "Dashboard",
      "icon": "stroke-home",
      "iconf":"fill-home",
      "type": "sub",
      "badgeType": "light-primary",
      "badgeValue": "5",
      "active": false,
      "children": [
        {
          "path": "/",
          "title": "Principal",
          "type": "link",
          "active":false
        },
        {
          "path": "/dashboard/ecommerce",
          "title": "Relatórios",
          "type": "link",
          "active":false
        },
        {
          "path": "/dashboard/online",
          "title": "Análises",
          "type": "link",
          "active":false
        },
        {
          "path": "/dashboard/crypto",
          "title": "Estatísticas",
          "type": "link",
          "active":false
        },
        {
          "path": "/dashboard/social",
          "title": "Comunicação",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Módulos",
      "icon": "stroke-widget",
      "iconf":"fill-widget",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/widgets/general",
          "title": "Licitações",
          "type": "link",
          "active":false
        },
        {
          "path": "/widgets/chart",
          "title": "Relatórios",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Configurações",
      "icon": "stroke-layout",
      "iconf":"fill-layout",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/pageLayout/boxed",
          "title": "Em Caixa",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/RTL",
          "title": "RTL",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/darklayout",
          "title": "Layout Escuro",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/hidenavscroll",
          "title": "Ocultar Rolagem da Navegação",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/footerlight",
          "title": "Rodapé Claro",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/footerdark",
          "title": "Rodapé Escuro",
          "type": "link",
          "active":false
        },
        {
          "path": "/pageLayout/footerfixed",
          "title": "Rodapé Fixo",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Aplicações",
      "headTitle2": "Aplicações prontas para uso",
      "type": "headtitle"
    },
    {
      "title": "Projetos",
      "icon": "stroke-project",
      "iconf":"fill-project",
      "type": "sub",
      "badgeType": "light-secondary",
      "badgeValue": "Novo",
      "active": false,
      "children": [
        {
          "path": "/project/projectlist",
          "title": "Lista de Projetos",
          "type": "link",
          "active": false
        },
        {
          "path": "/project/create-project",
          "title": "Criar Novo",
          "type": "link",
          "active": false
        }
      ]
    },
    {
      "path": "/licitacoes",
      "title": "Licitações Públicas",
      "icon": "stroke-file-text",
      "iconf":"fill-file-text",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/filemanager",
      "title": "Gerenciador de Arquivos",
      "icon": "stroke-file",
      "iconf":"fill-file",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/kanban",
      "title": "Quadro Kanban",
      "icon": "stroke-board",
      "iconf":"fill-board",
      "type": "link",
      "badgeType": "light-danger",
      "badgeValue": "Mais Recente",
      "active": false
    },
    {
      "title": "E-commerce",
      "icon": "stroke-ecommerce",
      "iconf":"fill-ecommerce",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/ecommerce/product",
          "title": "Produto",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/product/page/1",
          "title": "Página do Produto",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/product/list",
          "title": "Lista de Produtos",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/payment/details",
          "title": "Detalhes do Pagamento",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/order/history",
          "title": "Detalhes do Pedido",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/invoice",
          "title": "Fatura",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/cart",
          "title": "Carrinho",
          "type": "link",
          "active":false
        },
       
        {
          "path": "/ecommerce/wishlist",
          "title": "Lista de Desejos",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/checkout",
          "title": "Finalizar Compra",
          "type": "link",
          "active":false
        },
        {
          "path": "/ecommerce/pricing",
          "title": "Preços",
          "type": "link",
          "active":false
        }
      
      
      ]
    },
    {
      
      "title": "Email",
      "icon": "stroke-email",
      "iconf":"fill-email",
      "type": "sub",
      "active":false,
      "children": [
        
          {
            "path": "/email/readMail",
            "title" :"Aplicativo de Email",
            "type" : "link",
            "active":false
        
          },
          {
            "path": "/email/compose",
            "title" :"Compor Email",
            "type" : "link",
            "active":false
        
          }
      ]
    },
    {
      "title": "Chat",
      "icon": "stroke-chat",
      "iconf":"fill-chat",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/app/chat",
          "title": "Aplicativo de Chat",
          "type": "link",
          "active":false
        },
        {
          "path": "/app/videochat",
          "title": "Video Chat",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Usuários",
      "icon": "stroke-user",
      "iconf":"fill-user",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/users/profile",
          "title": "Perfil do Usuário",
          "type": "link",
          "active":false
        },
        {
          "path": "/users/edit",
          "title": "Editar Usuário",
          "type": "link",
          "active":false
        },
        {
          "path": "/users/cards",
          "title": "Cartões de Usuário",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/app/bookmark",
      "title": "Favoritos",
      "icon": "stroke-bookmark",
      "iconf":"fill-bookmark",
      "type": "link",
      "bookmark": true
    },
    {
      "path": "/app/contact",
      "title": "Contatos",
      "icon": "stroke-contact",
      "iconf":"fill-contact",
      "type": "link",
      "active": false

    },
    {
      "path": "/app/task",
      "title": "Tarefas",
      "icon": "stroke-task",
      "iconf":"fill-task",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/calendar",
      "title": "Calendário",
      "icon": "stroke-calendar",
      "iconf":"fill-calender",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/socialPage",
      "title": "Aplicativo Social",
      "icon": "stroke-social",
      "iconf":"fill-social",
      "type": "link",
      "active": false
    },
    {
      "path": "/app/todo",
      "title": "Lista de Tarefas",
      "icon": "stroke-to-do",
      "iconf":"fill-to-do",
      "type": "link",
      "active": false
    },

    {
      "path": "/pages/search",
      "title": "Resultados da Pesquisa",
      "icon": "stroke-search",
      "iconf":"fill-search",
      "type": "link",
      "active": false
    },
    {
      "headTitle1": "Formulários e Tabelas",
      "headTitle2": "Formulários e tabelas prontos para uso",
      "type": "headtitle"
    },
    {
      "title": "Formulários",
      "icon": "stroke-form",
      "iconf":"fill-form",
      "type": "sub",
      "active": false,
      "children": [
        {
          "title": "Controles de Formulário",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/validation",
              "title": "Validação de Formulário",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/inputs",
              "title": "Entradas Básicas",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/checkbox-radio",
              "title": "Caixa de Seleção e Rádio",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/input-groups",
              "title": "Grupos de Entrada",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/mega-options",
              "title": "Opções Mega",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Widgets de Formulário",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/datepicker",
              "title": "Seletor de Data",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/select2",
              "title": "Select2",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/switch",
              "title": "Interruptor",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/touchspin",
              "title": "Touchspin",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/typeahead",
              "title": "Typeahead",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/clipboard",
              "title": "Área de Transferência",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Layout de Formulário",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/form/defaultforms",
              "title": "Formulários Padrão",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard1",
              "title": "Assistente de Formulário 1",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard2",
              "title": "Assistente de Formulário 2",
              "type": "link",
              "active":false
            },
            {
              "path": "/form/wizard3",
              "title": "Assistente de Formulário 3",
              "type": "link",
              "active":false
            }
       
          ]
        }
       
      ]
    },
    {
      "title": "Tabelas",
      "icon": "stroke-table",
      "iconf":"fill-table",
      "type": "sub",
      "active": false,
      "children": [
        {
          "title": "Tabelas Bootstrap",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/table/basic",
              "title": "Tabelas Básicas",
              "type": "link",
              "active":false
            },
            
            {
              "path": "/table/tableComponent",
              "title": "Componentes de Tabela",
              "type": "link",
              "active":false
            }
          ]
        },
        {
          "title": "Tabelas de Dados",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/datatable-basic",
              "title": "Inicialização Básica",
              "type": "link",
              "active":false
            }
         
          ]
        }
     
      ]
    },
    {
      "headTitle1": "Componentes",
      "headTitle2": "Componentes e Elementos da UI",
      "type": "headtitle"
    },
    {
      "title": "Kits de UI",
      "icon": "stroke-ui-kits",
      "iconf":"fill-ui-kits",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/uikits/typography",
          "title": "Tipografia",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/avatars",
          "title": "Avatares",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/helper-classes",
          "title": "Classes Auxiliares",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/grid",
          "title": "Grade",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/tag-pills",
          "title": "Tags e Pílulas",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/progress-bar",
          "title": "Barra de Progresso",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/modal",
          "title": "Modal",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/alert",
          "title": "Alerta",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/popover",
          "title": "Popover",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/tooltip",
          "title": "Tooltip",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/loader",
          "title": "Spinners",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/dropdown",
          "title": "Menu Suspenso",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/accordion",
          "title": "Acordeão",
          "type": "link",
          "active":false
        },
        {
          "title": "Abas",
          "type": "sub",
          "active": false,
          "children": [
            {
              "path": "/uikits/bootstraptab",
              "title": "Abas Bootstrap",
              "type": "link",
              "active":false
              
            },
            {
              "path": "/uikits/linetab",
              "title": "Abas de Linha",
              "type": "link",
              "active":false
              
            }
          ]
        },
        {
          "path": "/uikits/box-shadow",
          "title": "Sombra",
          "type": "link",
          "active":false
        },
        {
          "path": "/uikits/lists",
          "title": "Listas",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "UI Bônus",
      "icon": "stroke-bonus-kit",
      "iconf":"fill-bonus-kit",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/advance/scrollable",
          "title": "Rolável",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/treeView",
          "title": "Visualização em Árvore",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/notify",
          "title": "Notificação Bootstrap",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/rating",
          "title": "Avaliação",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/dropzone",
          "title": "Zona de Soltura",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/tour",
          "title": "Tour",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/sweetalert",
          "title": "SweetAlert2",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/animatedModal",
          "title": "Modal Animado",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/owlCarousel",
          "title": "Carrossel Owl",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/ribbons",
          "title": "Fitas",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/pagination",
          "title": "Paginação",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/breadcrumb",
          "title": "Navegação",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/range-slider",
          "title": "Controle Deslizante",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/image-cropper",
          "title": "Cortador de Imagem",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/sticky",
          "title": "Adesivo",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/basicCard",
          "title": "Cartão Básico",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/creativeCard",
          "title": "Cartão Criativo",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/TabbedCard",
          "title": "Cartão com Abas",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/DraggableCard",
          "title": "Cartão Arrastável",
          "type": "link",
          "active":false
                  },
        {
          "path": "/advance/timeline1",
          "title": "Linha do Tempo",
          "type": "link",
          "active":false
          
        }

      ]
    },
 
    {
      "title": "Construtores",
      "icon": "stroke-builders",
      "iconf":"fill-builders",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/builder/form1",
          "title": "Construtor de Formulário 1",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/builder/form2",
          "title": "Construtor de Formulário 2",
          "type": "link",
          "active":false
          
        }
      
      ]
    },
    {
      "title": "Animações",
      "icon": "stroke-animation",
      "iconf":"fill-animation",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/animation/animate",
          "title": "Animar",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/animation/scroll",
          "title": "Revelação de Rolagem",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/animation/AOS",
          "title": "Animação AOS",
          "type": "link",
          "active":false
          
        },
       
        {
          "path": "/animation/wow",
          "title": "Animação Wow",
          "type": "link",
          "active":false
          
        } ,
        {
          "path": "/animation/tilt",
          "title": "Animação de Inclinação",
          "type": "link",
          "active":false
        } 
      ]
    },
    {
      "title": "Ícones",
      "icon": "stroke-icons",
      "iconf":"fill-icons",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/icons/flag",
          "title": "Ícone de Bandeira",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/fontawesome",
          "title": "Ícone Fontawesome",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/ico",
          "title": "Ícone Ico",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/themify",
          "title": "Ícone Themify",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/feather_icon",
          "title": "Ícone Feather",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/icons/whether",
          "title": "Ícone de Clima",
          "iconf":"",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Botões",
      "icon": "stroke-button",
      "iconf":"fill-botton",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/buttons/default",
          "title": "Estilo Padrão",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/flat",
          "title": "Estilo Plano",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/edge",
          "title": "Estilo Borda",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/raised",
          "title": "Estilo Elevado",
          "type": "link",
          "active":false
        },
        {
          "path": "/buttons/group",
          "title": "Grupo de Botões",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Gráficos",
      "icon": "stroke-charts",
      "iconf":"fill-charts",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/chart/google",
          "title": "Gráfico Google",
          "type": "link",
          "active":false
        },
        {
          "path": "/chart/chartist",
          "title": "Chartist",
          "type": "link",
          "active":false
        },
        {
          "path": "/chart/apexChart",
          "title": "ApexChart",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Páginas",
      "headTitle2": "Todas as Páginas Necessárias Adicionadas",
      "type": "headtitle"
    },
    {
      "path": "/pages/sample-page",
      "title": "Página de Exemplo",
      "icon": "stroke-sample-page",
      "iconf":"fill-sample-page",
      "type": "link",
      "active":false
    },
    {
      "title": "Página de Erro",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/error-400",
          "title": "Erro 400",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-401",
          "title": "Erro 401",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-403",
          "title": "Erro 403",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-404",
          "title": "Erro 404",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-500",
          "title": "Erro 500",
          "type": "link",
          "active":false
        },
        {
          "path": "/error-503",
          "title": "Erro 503",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Autenticação",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/auth/login",
          "title": "Login Simples",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/one",
          "title": "Login Com Imagem",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/two",
          "title": "Login Com Imagem 2",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/validate",
          "title": "Login Com Validação",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/tooltip",
          "title": "Login Com Tooltip",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/login/sweetalert",
          "title": "Login Com Sweetalert",
          "type": "link",
          "active":false
        },
        {
          "path": "/auth/register",
          "title": "Registro Simples",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/register/image",
          "title": "Registro com Imagem",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/register/image2",
          "title": "Registro com Imagem 2",
          "type": "link",
          "active":false
        },
  
        {
          "path": "/authentication/unlockuser",
          "title": "Desbloquear Usuário",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/forgetpassword",
          "title": "Esqueci a Senha",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/resetpassword",
          "title": "Redefinir Senha",
          "type": "link",
          "active":false
        },
        {
          "path": "/authentication/maintenance",
          "title": "Manutenção",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Em Breve",
      "icon": "stroke-internationalization",
      "iconf":"fill-internationalization",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/comingsoon/comingsoon-simple",
          "title": "Em Breve Simples",
          "type": "link",
          "active":false
        },
        {
          "path": "/comingsoon/comingsoon-image",
          "title": "Em Breve com Imagem de Fundo",
          "type": "link",
          "active":false
        },
        {
          "path": "/comingsoon/comingsoon-video",
          "title": "Em Breve com Vídeo de Fundo",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "headTitle1": "Diversos",
      "headTitle2": "Páginas e aplicações bônus",
      "type": "headtitle"
    },
    {
      "title": "Galeria",
      "icon": "stroke-gallery",
      "iconf":"fill-gallery",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/gallery/grid-gallery",
          "title": "Galeria em Grade",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-desc",
          "title": "Galeria em Grade Com Descrição",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-masonary",
          "title": "Galeria Masonry",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/gallery-masonary-desc",
          "title": "Galeria Masonry Com Descrição",
          "type": "link",
          "active":false
        },
        {
          "path": "/gallery/hover-effect",
          "title": "Efeito Hover",
          "type": "link",
          "active":false
        }
      ]
    },
   

    {
      "title": "Blog",
      "icon": "stroke-blog",
      "iconf":"fill-blog",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/blog/details",
          "title": "Detalhes do Blog",
          "type": "link",
          "active":false
        },
        {
          "path": "/blog/single",
          "title": "Blog Único",
          "type": "link",
          "active":false
        },
        {
          "path": "/blog/add",
          "title": "Adicionar Blog",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/pages/faq",
      "title": "Perguntas Frequentes",
      "icon": "stroke-faq",
      "iconf":"fill-faq",
      "type": "link",
      "active":"false"
    },
    {
      "title": "Busca de Emprego",
      "icon": "stroke-job-search",
      "iconf":"fill-job-search",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/job/card",
          "title": "Visualização em Cartão",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/list",
          "title": "Visualização em Lista",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/details/1",
          "title": "Detalhes do Emprego",
          "type": "link",
          "active":false
          
        },
        {
          "path": "/job/apply/1",
          "title": "Candidatar-se",
          "type": "link",
          "active":false
          
        }
      ]
    },
    {
      "title": "Aprendizado",
      "icon": "stroke-learning",
      "iconf":"fill-learning",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/learning/list",
          "title": "Lista de Aprendizado",
          "type": "link",
          "active":false
        },
        {
          "path": "/learning/details/1",
          "title": "Curso Detalhado",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Mapas",
      "icon": "stroke-maps",
      "iconf":"fill-maps",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/maps/vue-google-maps",
          "title": "Mapas Google",
          "type": "link",
          "active":false
        },
        {
          "path": "/maps/vue-leaflet-maps",
          "title": "Vue Leaflet",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "title": "Editor",
      "icon": "stroke-editors",
      "iconf":"fill-editors",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/editor/simple-editor",
          "title": "Editor Simples",
          "icon": "box",
          "iconf":"",
          "type": "link",
          "active":false
        },
        {
          "path": "/editor/ck-editor",
          "title": "Editor CK",
          "icon": "box",
          "iconf":"",
          "type": "link",
          "active":false
        }
      ]
    },
    {
      "path": "/knowledgebase/knowledgebase",
      "title": "Base de Conhecimento",
      "icon": "stroke-knowledgebase",
      "iconf":"fill-knowledgebase",
      "type": "link",
      "active":false
    },
    {
      "path": "/pages/support",
      "title": "Ticket de Suporte",
      "icon": "stroke-support-tickets",
      "iconf":"fill-support-tickets",
      "type": "link",
      "active":false
    }
  ]
}