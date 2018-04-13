System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return [
                        {
                            "heroId": 1,
                            "heroName": "GOD Of Cricket",
                            "realName": "Sachin Tendulkar",
                            "heroStrength": "Indian Cricket Legend",
                            "heroNature": "Calm,Quiet and Focused",
                            "imageUrl": "./app/assets/images/sachin.jfif"
                        },
                        {
                            "heroId": 2,
                            "heroName": "P V Sindhu",
                            "realName": "Pusarla Venkata Sindhu",
                            "heroStrength": "Olympic Silver Medal Winner for Women Badminton",
                            "heroNature": "Aggressiv,Stylish",
                            "imageUrl": "./app/assets/images/PVSindhu.jpg"
                        },
                        {
                            "heroId": 3,
                            "heroName": "Sakshi Malik",
                            "realName": "Sakshi Malik",
                            "heroStrength": "Indian Women Wrestler",
                            "heroNature": "Rustic",
                            "imageUrl": "./app/assets/images/sakshimalik.jpg"
                        },
                        {
                            "heroId": 4,
                            "heroName": "Mariyappan",
                            "realName": "Mariyappan Thangavelu",
                            "heroStrength": "Inldian paralympic  High Jump Gold Winner",
                            "heroNature": "Angry",
                            "imageUrl": "./app/assets/images/Mariyappan.jpg"
                        },
                        {
                            "heroId": 5,
                            "heroName": "Vishy",
                            "realName": "Viswanathan Anand",
                            "heroStrength": "Indian Chess GrandMaster",
                            "heroNature": "Smart,Clever",
                            "imageUrl": "./app/assets/images/ViswanathanAnand.jpg"
                        }
                    ];
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map