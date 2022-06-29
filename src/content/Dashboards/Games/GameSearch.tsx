import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  FormControl,
  CardActions,
  Typography,
  Avatar,
  Divider,
  Rating,
  OutlinedInput,
  Chip,
  Tooltip,
  AvatarGroup,
  Pagination,
  InputAdornment,
  Menu,
  MenuItem,
  styled,
  useTheme
} from '@mui/material';
import { formatDistance, subMonths, subDays } from 'date-fns';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Link from 'src/components/Link';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
    padding-right: ${theme.spacing(0.7)}
`
);

function GameSearch() {
  const theme = useTheme();

  const handleDelete = () => {};

  const handleClick = () => {};

  const periods = [
    {
      value: 'popular',
      text: 'Mais popular'
    },
    {
      value: 'recent',
      text: 'Jogos Recentes'
    },
    {
      value: 'updated',
      text: 'Últimas Atualizações'
    },
    {
      value: 'oldest',
      text: 'Jogos mais antigos'
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInputWrapper
          type="text"
          placeholder="Search terms here..."
          endAdornment={
            <InputAdornment position="end">
              <Button variant="contained" size="small">
                Buscar
              </Button>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            Mostrando{' '}
            <Text color="black">
              <b>57 Jogos</b>
            </Text>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="subtitle2"
            sx={{
              pr: 1
            }}
          >
            Ordenar Por:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuPeriod(false)}
            open={openPeriod}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {periods.map((_period) => (
              <MenuItem
                key={_period.value}
                onClick={() => {
                  setPeriod(_period.text);
                  setOpenMenuPeriod(false);
                }}
              >
                {_period.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={5} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              Novidades da atualização de War Robots 8.2
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Novo Robô"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Voador"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
              Novo robô Seraphin chegando, um exímio assassino de Titãn, podendo atingir mais de um robô
              com sua habilidade de ataque
            </Typography>
            <Button size="small" variant="contained">
              Visualizar
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subDays(new Date(), 2), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title="Visualizar Perfil">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="Visualizar Perfil">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="Visualizar Perfil">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={5} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              MK3, todos os poderes do lutadores
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Poderes"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Fatalites"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
              Aqui estão todos os poderes dos Kombatentes, de poderes durante a partida até a finalizações da gameplay.
            </Typography>
            <Button size="small" variant="contained">
              Visualizar
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subDays(new Date(), 22), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title={`Visualizar Perfil`}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/3.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="Visualizar Perfil">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/4.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box>
              <Rating value={4} defaultValue={5} precision={1} readOnly />
            </Box>
            <Link href="#" variant="h3" color="text.primary">
              Stumble Guys, diversão e muita risada...
            </Link>
            <Box
              sx={{
                py: 2
              }}
            >
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Website"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                sx={{
                  mr: 0.5
                }}
                size="small"
                label="Integrations"
                color="secondary"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
            <Typography
              sx={{
                pb: 2
              }}
              color="text.secondary"
            >
              Nemo enim ipsam voluptatem quia accusantium doloremque laudantium
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione.
            </Typography>
            <Button size="small" variant="contained">
              Visualizar
            </Button>
            <Divider
              sx={{
                my: 2
              }}
            />
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                variant="subtitle2"
              >
                <TodayTwoToneIcon
                  sx={{
                    mr: 1
                  }}
                />
                {formatDistance(subDays(new Date(), 31), new Date(), {
                  addSuffix: true
                })}
              </Typography>
              <AvatarGroup>
                <Tooltip arrow title="View profile for Remy Sharp">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Remy Sharp"
                    src="/static/images/avatars/1.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Travis Howard">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Travis Howard"
                    src="/static/images/avatars/2.jpg"
                  />
                </Tooltip>
                <Tooltip arrow title="View profile for Trevor Henderson">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30
                    }}
                    component={Link}
                    href="#"
                    alt="Trevor Henderson"
                    src="/static/images/avatars/5.jpg"
                  />
                </Tooltip>
              </AvatarGroup>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 4
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          showFirstButton
          showLastButton
          count={15}
          defaultPage={6}
          siblingCount={0}
          size="large"
          shape="rounded"
          color="primary"
        />
      </Box>
    </>
  );
}

export default GameSearch;
