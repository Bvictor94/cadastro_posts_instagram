"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagensController = void 0;
const common_1 = require("@nestjs/common");
const postagens_service_1 = require("./postagens.service");
const swagger_1 = require("@nestjs/swagger");
let PostagensController = class PostagensController {
    constructor(postagensService) {
        this.postagensService = postagensService;
    }
    async criar(body) {
        return this.postagensService.criar(body);
    }
    async listarTodas() {
        return this.postagensService.listarTodas();
    }
    async excluir(id) {
        return this.postagensService.excluir(id);
    }
};
exports.PostagensController = PostagensController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostagensController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostagensController.prototype, "listarTodas", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostagensController.prototype, "excluir", null);
exports.PostagensController = PostagensController = __decorate([
    (0, swagger_1.ApiTags)('postagens'),
    (0, common_1.Controller)('postagens'),
    __metadata("design:paramtypes", [postagens_service_1.PostagensService])
], PostagensController);
//# sourceMappingURL=postagens.controller.js.map