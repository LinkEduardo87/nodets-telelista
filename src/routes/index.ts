import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/comercios', PageController.comercios);
router.get('/saude', PageController.lojas);
router.get('/servicos', PageController.servicos);

router.get('/search', SearchController.search);

export default router;